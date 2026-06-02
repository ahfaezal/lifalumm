import { campaign } from "@/data/campaign";

export function Footer() {
  return (
    <footer className="bg-[#072d22] px-6 py-16 text-white">

      <div className="mx-auto max-w-6xl">

        <div className="grid gap-10 md:grid-cols-3">

          <div>
            <div className="text-2xl font-bold">
              Masjid Al Umm
            </div>

            <p className="mt-4 text-white/80 leading-8">
              Bersama kita melengkapkan baki bayaran lif baharu
              demi kemudahan seluruh jemaah.
            </p>
          </div>

          <div>
            <div className="font-semibold">
              Akaun Sumbangan
            </div>

            <div className="mt-4 space-y-2 text-white/80">

              <div>
                {campaign.bank.name}
              </div>

              <div>
                {campaign.bank.accountName}
              </div>

              <div className="text-xl font-bold text-white">
                {campaign.bank.accountNumber}
              </div>

            </div>
          </div>

          <div>
            <div className="font-semibold">
              Hantar Resit
            </div>

            <a
              href={campaign.links.whatsappReceipt}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-full bg-emerald-600 px-6 py-3 font-semibold hover:bg-emerald-700"
            >
              💬 WhatsApp Resit
            </a>

            <div className="mt-6 text-white/70">
              Bandar Baru Bangi
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">

          © 2026 Masjid Al Umm • Kempen Sumbangan Dana Lif

        </div>

      </div>

    </footer>
  );
}