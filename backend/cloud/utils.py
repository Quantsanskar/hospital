from django.conf import settings
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def send_email(body):
    sender_email = "querysendersp@gmail.com"
    receiver_email = "sanskarsrdav@gmail.com"
    password = "ijslzduzbpbqciva"

    message = MIMEMultipart()
    message["From"] = sender_email
    message["To"] = receiver_email
    message["Subject"] = "Hospital Contact Form Queries"

    message.attach(MIMEText(body, "plain"))

    server = smtplib.SMTP("smtp.gmail.com", 587)
    server.starttls()

    server.login(sender_email, password)

    server.sendmail(sender_email, receiver_email, message.as_string())

    server.quit()