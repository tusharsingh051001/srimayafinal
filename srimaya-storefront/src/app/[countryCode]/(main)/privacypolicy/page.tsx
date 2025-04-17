import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <main className="w-screen bg-white py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="font-cormorant text-4xl underline text-center mb-8">
          Privacy Policy
        </h1>
        <ol className="list-decimal list-inside space-y-6 text-gray-700 text-lg">
          <li>
            <strong className="font-cormorant">Information We Collect</strong>
            <p className="mt-2">
              We collect personal information that you voluntarily provide to us when you interact with our Site. This may include:
            </p>
            <ul className="list-disc list-inside mt-2 ml-4">
              <li>
                <strong>Personal Details:</strong> Name, email address, phone number, billing and shipping address, and payment information.
              </li>
              <li>
                <strong>Transaction Data:</strong> Details of the products you purchase, order history, and payment history.
              </li>
              <li>
                <strong>Technical Data:</strong> Information about your device, browser, IP address, operating system, and usage data.
              </li>
              <li>
                <strong>Communication Data:</strong> Messages, reviews, or feedback that you send to us via email, chat, or other communication channels.
              </li>
            </ul>
          </li>
          <li>
            <strong className="font-cormorant">How We Use Your Information</strong>
            <p className="mt-2">
              We may use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside mt-2 ml-4">
              <li>
                <strong>To Process Orders:</strong> To fulfill your orders, including shipping, payment processing, and customer service.
              </li>
              <li>
                <strong>To Improve Your Shopping Experience:</strong> To personalize your experience, provide recommendations, and enhance customer support.
              </li>
              <li>
                <strong>To Communicate with You:</strong> To send you order confirmations, shipping notifications, promotions, and other information regarding our products and services (you can opt-out of marketing communications at any time).
              </li>
              <li>
                <strong>To Improve Our Website:</strong> To analyze website usage and improve the design, functionality, and performance of our Site.
              </li>
              <li>
                <strong>Legal and Security Reasons:</strong> To comply with legal obligations, enforce our Terms of Service, or protect against fraud, security breaches, or legal claims.
              </li>
            </ul>
          </li>
          <li>
            <strong className="font-cormorant">Sharing Your Information</strong>
            <p className="mt-2">
              We respect your privacy and do not sell, rent, or trade your personal information to third parties. However, we may share your information with the following parties for specific purposes:
            </p>
            <ul className="list-disc list-inside mt-2 ml-4">
              <li>
                <strong>Service Providers:</strong> We may share your information with trusted third-party vendors who assist us in operating our Site, processing payments, fulfilling orders, and providing customer support (e.g., payment processors, delivery services, marketing providers).
              </li>
              <li>
                <strong>Legal Compliance:</strong> We may disclose your information if required to do so by law or in response to valid legal requests, such as a subpoena or court order.
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, your information may be transferred to the new owner.
              </li>
            </ul>
          </li>
          <li>
            <strong className="font-cormorant">Data Security</strong>
            <p className="mt-2">
              We take reasonable precautions to protect the personal information you provide us. We implement security measures, such as encryption and firewalls, to protect your data from unauthorized access, loss, or misuse. However, no security system is 100% secure, and we cannot guarantee the absolute security of your personal data. You are also responsible for keeping your account credentials confidential.
            </p>
          </li>
          <li>
            <strong className="font-cormorant">Cookies and Tracking Technologies</strong>
            <p className="mt-2">
              We use cookies and similar tracking technologies to enhance your browsing experience on our Site. Cookies are small files stored on your device that help us remember your preferences, improve functionality, and analyze website traffic. You can control cookie preferences through your browser settings, but please note that disabling cookies may impact your experience on our Site.
            </p>
          </li>
          <li>
            <strong className="font-cormorant">Your Rights and Choices</strong>
            <p className="mt-2">
              As a user, you have the following rights regarding your personal data:
            </p>
            <ul className="list-disc list-inside mt-2 ml-4">
              <li>
                <strong>Access and Correction:</strong> You have the right to access, update, or correct your personal information by logging into your account or contacting us.
              </li>
              <li>
                <strong>Deletion:</strong> You can request the deletion of your personal data, subject to certain legal and contractual restrictions.
              </li>
              <li>
                <strong>Opt-Out:</strong> You can opt out of receiving promotional emails or newsletters by clicking the unsubscribe link in the email or contacting us directly.
              </li>
              <li>
                <strong>Consent Withdrawal:</strong> If you have previously provided consent for us to use your personal data, you can withdraw your consent at any time by contacting us.
              </li>
            </ul>
          </li>
          <li>
            <strong className="font-cormorant">Children’s Privacy</strong>
            <p className="mt-2">
              Our website is not intended for children under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected data from a child under 18, we will take steps to delete that information as soon as possible. If you believe we have collected personal data from a child, please contact us immediately.
            </p>
          </li>
          <li>
            <strong className="font-cormorant">Links to Third-Party Websites</strong>
            <p className="mt-2">
              Our Site may contain links to third-party websites that are not operated by us. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to read the privacy policies of any third-party websites you visit.
            </p>
          </li>
          <li>
            <strong className="font-cormorant">Changes to This Privacy Policy</strong>
            <p className="mt-2">
              We reserve the right to modify or update this Privacy Policy at any time. When we do, we will post the revised policy on this page with an updated effective date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
            </p>
          </li>
        </ol>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
