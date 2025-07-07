## 1. Business Process for Receiving Requests 

1. A user fills out the request form on the SmartCity landing page.
2. The form data is sent to a backend API hosted on the Fozzy server.
   - The API receives a POST request containing fields: name, email, selected tour, and comment.
   - Basic validation and logging of the request data are performed.
3. After receiving the request, the API formats and sends an email notification to the corporate mailbox via Fozzy’s SMTP service.
4. The Fozzy mail server delivers the email containing the request to the specified email address.
5. A notification about the new request arrives in the email client (e.g., Gmail, Outlook).
6. The request is processed manually or automatically (using scripts to parse incoming emails and import data into a database or CRM).


## 2. Technical Architecture

- **Frontend:** The landing page form submits data via POST requests to the backend API.
- **Backend API:** Hosted on Fozzy, handles incoming requests, processes them, and sends email notifications.
- **Mail Service:** Fozzy’s SMTP server acts as the email delivery system.
- **Email Client:** The end-point where requests are received and reviewed.


## 3. Potential Improvements and Scaling

- Migrate to a fully featured REST API with persistent storage (database) for requests.
- Automate email processing using IMAP scripts that parse incoming requests and insert data into CRM or BI systems.
- Configure notifications via Slack, Telegram, or webhooks.
- Implement webhooks for automated user feedback (e.g., confirmation emails).
- Add spam protection and server-side data validation.


## 4. Process Flow Diagram

```mermaid
graph TD
    A[User] -->|Fills form| B[Frontend]
    B -->|POST request| C[Backend API on Fozzy]
    C -->|Sends email| D[Fozzy SMTP Server]
    D -->|Delivers email| E[Email Client]
    E -->|Request processing| F[Admin / Automation]
