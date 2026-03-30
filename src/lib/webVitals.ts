type MetricPayload = {
  name: string;
  value: number;
  id: string;
  rating: 'good' | 'needs-improvement' | 'poor';
  navigationType?: string;
};

function sendToAnalytics(metric: MetricPayload) {
  if (window.location.hostname === 'localhost') {
    return;
  }

  const payload: MetricPayload = {
    name: metric.name,
    value: metric.value,
    id: metric.id,
    rating: metric.rating,
    navigationType: metric.navigationType,
  };

  const body = JSON.stringify({
    ...payload,
    path: window.location.pathname,
    userAgent: navigator.userAgent,
    timestamp: Date.now(),
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon('/api/web-vitals', body);
    return;
  }

  fetch('/api/web-vitals', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
    keepalive: true,
  }).catch(() => {
    // Ignore transport errors to avoid user-facing impact.
  });
}

export async function initWebVitals() {
  const { onCLS, onINP, onLCP } = await import('web-vitals');

  onCLS(sendToAnalytics, { reportAllChanges: true });
  onINP(sendToAnalytics, { reportAllChanges: true });
  onLCP(sendToAnalytics, { reportAllChanges: true });
}
