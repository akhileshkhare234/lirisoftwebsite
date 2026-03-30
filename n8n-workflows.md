/**
 * n8n Workflow Examples for Lirisoft
 * 
 * 1. Lead Routing Workflow:
 *    Webhook (from /api/leads) -> 
 *    Supabase (Insert Lead) -> 
 *    Condition (Is High Value?) -> 
 *    IF YES: Slack Notification (#sales-urgent) + Email to Sales Director
 *    IF NO: Email to Sales Team + Add to HubSpot CRM
 * 
 * 2. Automated Invoice Generation:
 *    Stripe Webhook (payment_intent.succeeded) -> 
 *    Supabase (Update Order Status) -> 
 *    PDF Generator (Create Invoice) -> 
 *    AWS S3 (Store Invoice) -> 
 *    SendGrid (Email Invoice to Client)
 * 
 * 3. Blog to Social Automation:
 *    Supabase (On Post Published) -> 
 *    OpenAI (Generate Social Captions) -> 
 *    LinkedIn API (Post Update) -> 
 *    Twitter API (Post Tweet)
 */
