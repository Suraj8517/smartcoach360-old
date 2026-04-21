import { useState, useRef } from "react";
import {
  FileText,
  Shield,
  UserCircle,
  Share2,
  Cookie,
  Heart,
  Target,
  CheckCircle,
  Clock,
  Users,
  Phone,
  Info,
  Menu,
  X,
} from "lucide-react";

const sections = [
  { id: "introduction",   num: "01", label: "Introduction",              icon: FileText },
  { id: "user-info",      num: "02", label: "User Information",          icon: UserCircle },
  { id: "sharing",        num: "03", label: "Sharing & Disclosure",      icon: Share2 },
  { id: "cookies",        num: "04", label: "Cookies",                   icon: Cookie },
  { id: "health-collect", num: "05", label: "Health Data Collection",    icon: Heart },
  { id: "health-purpose", num: "06", label: "Purpose of Health Data",    icon: Target },
  { id: "user-consent",   num: "07", label: "User Consent",              icon: CheckCircle },
  { id: "security",       num: "08", label: "Security Measures",         icon: Shield },
  { id: "retention",      num: "09", label: "Data Retention",            icon: Clock },
  { id: "third-party",    num: "10", label: "Third-Party Services",      icon: Users },
  { id: "contact",        num: "11", label: "Contact & Updates",         icon: Phone },
];

function NavItem({ section, onClick }) {
  const Icon = section.icon;
  return (
    <button
      onClick={() => onClick(section.id)}
      className="flex items-center gap-3 w-full px-3 py-2.5 text-left rounded-lg hover:bg-[#f0e8f5] transition-colors duration-150 group"
    >
      <div className="w-6 h-6 rounded-md bg-[#ede4f2] flex items-center justify-center flex-shrink-0 group-hover:bg-[#dfd0ea] transition-colors">
        <Icon size={12} className="text-[#6b3f7a]" />
      </div>
      <span className="text-[12.5px] flex-1 leading-snug text-[#5e4f5a] group-hover:text-[#2e1a32] transition-colors">
        {section.label}
      </span>
      <span className="text-[9px] text-[#c4b0ce] font-medium flex-shrink-0 tabular-nums">
        {section.num}
      </span>
    </button>
  );
}

function SectionHeader({ num, title, icon: Icon }) {
  return (
    <div className="flex items-start gap-3 mb-5 pb-4 border-b border-[#ede8e7]">
      <div className="w-9 h-9 rounded-xl bg-purple-900 flex items-center justify-center flex-shrink-0">
        <Icon size={16} className="text-white" />
      </div>
      <div>
        <p className="text-[10.5px] text-[#b09aba] font-semibold tracking-wider uppercase mb-0.5 m-0">Section {num}</p>
        <h2 className="text-[16px] sm:text-[17px] font-semibold text-[#2e1a32] m-0">{title}</h2>
      </div>
    </div>
  );
}

function Callout({ children }) {
  return (
    <div className="bg-[#f7f0fa] border-l-[3px] border-purple-700 rounded-r-xl px-4 py-3 my-4">
      <p className="text-[13px] text-[#5e4f5a] leading-relaxed m-0">{children}</p>
    </div>
  );
}

function InfoBox({ children }) {
  return (
    <div className="bg-[#f7f0fa] rounded-xl px-4 py-3.5 my-4 flex gap-3">
      <Info size={14} color="#7c4d8a" className="flex-shrink-0 mt-0.5" />
      <p className="text-[13px] text-[#5e4f5a] leading-relaxed m-0">{children}</p>
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="list-none p-0 my-2 mb-4 space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-[13px] sm:text-[13.5px] leading-[1.75] text-[#3d3040]">
          <span className="w-[5px] h-[5px] rounded-full bg-[#9b6aaa] mt-[9px] flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function P({ children }) {
  return <p className="text-[13px] sm:text-[13.5px] leading-[1.85] text-[#3d3040] mb-3">{children}</p>;
}

function Divider() {
  return <hr className="border-0 border-t border-[#f0eaee] my-8" />;
}

function SubHeading({ children }) {
  return <p className="text-[13px] font-semibold text-[#2e1a32] mt-4 mb-2">{children}</p>;
}

export default function PrivacyPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const contentRef = useRef(null);
  const sectionRefs = useRef({});

  const scrollToSection = (id) => {
    const el = sectionRefs.current[id];
    if (el && contentRef.current)
      contentRef.current.scrollTo({ top: el.offsetTop - 24, behavior: "smooth" });
    setMobileNavOpen(false);
  };

  const ref = (id) => (el) => { sectionRefs.current[id] = el; };

  return (
    <div className="flex w-full h-screen font-sans bg-white overflow-hidden">

      <nav className="hidden md:flex w-[255px] min-w-[255px] bg-[#faf6fc] flex-col max-h-[100vh]">

        {/* Brand */}
        <div className="px-5 pt-7 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-900 flex items-center justify-center shadow-sm">
              <Shield size={16} color="#fff" />
            </div>
            <div>
              <p className="text-[13.5px] font-bold text-[#2e1a32] m-0 leading-tight">Privacy Policy</p>
            </div>
          </div>
        </div>

        {/* Nav items */}
        <div className="flex-1 overflow-y-auto px-3">
          <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#d0beda] px-1 mb-2">Contents</p>
          <div className="space-y-0.5">
            {sections.map((s) => (
              <NavItem key={s.id} section={s} onClick={scrollToSection} />
            ))}
          </div>
        </div>
      </nav>

      {/* ── Main Content ── */}
      <main ref={contentRef} className="flex-1 overflow-y-auto bg-white h-[100vh]">

        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between px-5 py-4 bg-white border-b border-[#f0eaee] sticky top-0 z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-purple-900 flex items-center justify-center">
              <Shield size={13} color="#fff" />
            </div>
            <div>
              <p className="text-[13px] font-bold text-[#2e1a32] m-0 leading-none">Privacy Policy</p>
              <p className="text-[10.5px] text-[#b09aba] m-0 mt-0.5 leading-none">SmartCoach360</p>
            </div>
          </div>
          </div>

        {/* Content */}
        <div className="max-w-[75%] mx-auto px-5 sm:px-8 md:px-14 pt-10 sm:pt-14 pb-20">

          <div className="mb-8">
            <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#c4b0ce] mb-2 m-0">SmartCoach360</p>
            <h1 className="text-[24px] sm:text-[28px] font-bold text-[#2e1a32] mt-0 mb-1.5 tracking-tight">Privacy Policy</h1>
          </div>

          <Callout>
            We are dedicated to maintaining the privacy and security of your personal information. We value your privacy, and preserving your trust is of paramount importance to us.
          </Callout>

          <Divider />

          <section id="introduction" ref={ref("introduction")} className="mb-10">
            <SectionHeader num="01" title="Introduction" icon={FileText} />
            <P>Welcome to <strong>smartcoach360.ai</strong> (referred to as the "Website"). SmartCoach360 is registered as <strong>SmartCoach360</strong>, a company incorporated under the Companies Act, 2013. Its registered office is located at No.6/53, Ajay Complex, Urumandam Palayam, G.N. Mills (Po), Coimbatore, Tamil Nadu, India – 641029. SmartCoach360 is recognized as "We" and "Us".</P>
            <P>The agreement between you and us is entirely governed by these terms and any applicable policies; it also supersedes all other agreements.</P>
            <InfoBox>This Privacy Policy describes our privacy practices for all websites, products, and services that are linked to it. However, this policy does not apply to affiliates and partners that have their own privacy policy. In such cases, we advise reading the privacy statement on the relevant website.</InfoBox>
          </section>

          <Divider />

          <section id="user-info" ref={ref("user-info")} className="mb-10">
            <SectionHeader num="02" title="User Information" icon={UserCircle} />
            <P>As part of the registration process and when you interface with SmartCoach360, we ask you for specific details. Through the App Services, we will obtain this data in a wide range of formats and sources, including:</P>
            <BulletList items={["Account registration forms", "Contact us forms", "Other contact with customer support"]} />
            <P>By the use of various technologies, we gather data about how you navigate our website and/or application. This includes information on the operations you completed while using our services, such as:</P>
            <BulletList items={["Services you requested", "Payment method and transactional details"]} />
            <Callout>We do not assemble data from any outside sources.</Callout>
          </section>

          <Divider />

          <section id="sharing" ref={ref("sharing")} className="mb-10">
            <SectionHeader num="03" title="Sharing & Disclosure of Data with Third Parties" icon={Share2} />
            <P>As required by law, at times we might be required to disclose your personal information — including transactional and financial information — to relevant authorities. In some cases, when we believe that such disclosure is necessary to protect our rights, or the rights of others, or to comply with a judicial proceeding, court order, or legal process served on our website or app, we would share such information pursuant to a lawful request from law enforcement agencies.</P>
            <P>We reserve the right to share personally identifying information about you that we have obtained from you through our website or application with other counterparties and partners that are not functioning as our suppliers or business partners.</P>
            <InfoBox>Except as stated in this Privacy Policy, we won't do so without explicitly getting your authorization. We do not sell or lease such information.</InfoBox>
            <P>We may use the information we have about you for marketing purposes, but only with your express consent. You can opt-out at any time by:</P>
            <BulletList items={[
              "Following the unsubscribe instructions found in each email you receive",
              "Making a specific request when we call you",
              "Getting in contact with us directly",
            ]} />
          </section>

          <Divider />

          <section id="cookies" ref={ref("cookies")} className="mb-10">
            <SectionHeader num="04" title="Cookies" icon={Cookie} />
            <P>To help comprehend how users engage with the SmartCoach360 App, analyse the App Services, and encourage trust and safety, we employ data collecting tools like "cookies" on specific portions of the App. Cookies are small files that are retained on your device's hard disc or other storage space and assist us in providing the App Services.</P>
            <InfoBox>Please note that there are specific features we provide through the App that can only be enabled by using a "cookie."</InfoBox>
            <Callout>You are always free to decline our cookies if your device permits, although doing so might prevent you from using some features.</Callout>
            <P>We reserve all rights to change this policy from time to time. Any amendments will become effective immediately as the updated Privacy Policy is publicized. We strongly encourage you to visit this page frequently to obtain the most recent information on our privacy practices.</P>
          </section>

          <Divider />

          <section id="health-collect" ref={ref("health-collect")} className="mb-10">
            <SectionHeader num="05" title="Health Connect Data — Collection and Usage" icon={Heart} />
            <P>We value the privacy and security of our users. Our app requests access to health-related permissions, specifically the ability to read:</P>
            <BulletList items={["Steps", "Activity", "Calories", "Sleep information"]} />
            <P>This data is collected for the sole purpose of enhancing the user experience and providing features related to health and fitness.</P>
          </section>

          <Divider />

          <section id="health-purpose" ref={ref("health-purpose")} className="mb-10">
            <SectionHeader num="06" title="Purpose of Health Data Access" icon={Target} />
            <P>Our app utilizes health-related permissions to track:</P>
            <BulletList items={["Daily steps", "Daily activity", "Calories", "Sleep patterns"]} />
            <Callout>This data is processed locally on the user's device and is not shared with any third parties.</Callout>
          </section>

          <Divider />

          <section id="user-consent" ref={ref("user-consent")} className="mb-10">
            <SectionHeader num="07" title="User Consent" icon={CheckCircle} />
            <P>By using our app, you explicitly consent to the collection and usage of health-related data for the purposes outlined in this privacy policy.</P>
            <InfoBox>You have the option to grant or deny these permissions within the app settings at any time.</InfoBox>
          </section>

          <Divider />

          <section id="security" ref={ref("security")} className="mb-10">
            <SectionHeader num="08" title="Security Measures" icon={Shield} />
            <P>We implement robust security measures to protect the confidentiality and integrity of health-related data. This includes:</P>
            <BulletList items={["Encryption of data in transit and at rest", "Secure storage practices"]} />
          </section>

          <Divider />

          <section id="retention" ref={ref("retention")} className="mb-10">
            <SectionHeader num="09" title="Data Retention" icon={Clock} />
            <P>We retain health-related data only for as long as necessary to fulfill the purposes outlined in this privacy policy.</P>
            <Callout>Users can request the deletion of their data by contacting our support team via email.</Callout>
          </section>

          <Divider />

          <section id="third-party" ref={ref("third-party")} className="mb-10">
            <SectionHeader num="10" title="Third-Party Services" icon={Users} />
            <P>Our app does not share health-related data with third-party services, advertisers, or external entities. We do not engage in the sale or exchange of user data.</P>
            <InfoBox>Clients agree to receive promotional calls, consultation calls, and SMS on the number shared. Such calls and SMS may come from a third-party platform.</InfoBox>
          </section>

          <Divider />

          <section id="contact" ref={ref("contact")} className="mb-10">
            <SectionHeader num="11" title="Contact & Policy Updates" icon={Phone} />
            <P>We reserve all rights to change this Privacy Policy from time to time. Any amendments will become effective immediately once the updated Privacy Policy is publicized.</P>
            <P>We strongly encourage you to visit this page frequently to obtain the most recent information on our privacy practices.</P>
            <SubHeading>Registered Address</SubHeading>
            <div className="bg-[#f7f2fa] rounded-xl px-4 py-4 text-[13px] text-[#3d3040] leading-[1.8] mt-2">
              <p className="m-0 text-[#5e4f5a]">No.6/53, Ajay Complex, Urumandam Palayam,</p>
              <p className="m-0 text-[#5e4f5a]">G.N. Mills (Po), Coimbatore, Tamil Nadu,</p>
              <p className="m-0 text-[#5e4f5a]">India – 641029</p>
            </div>

            <div className="mt-10 text-center">
              <p className="text-[11.5px] text-[#c4b0ce] m-0">— End of Privacy Policy —</p>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}