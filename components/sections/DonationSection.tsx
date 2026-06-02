"use client";

import Image from "next/image";
import { campaign } from "@/data/campaign";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function DonationSection() {
  function openBank() {
    if (campaign.links.bankDeepLink !== "#") {
      window.location.href = campaign.links.bankDeepLink;
      return;
    }

    navigator.clipboard.writeText(campaign.bank.accountNumber);

    alert(
      "Nombor akaun telah disalin. Sila buka aplikasi bank untuk membuat sumbangan."
    );
  }

  return (
    <section id="sumbang" className="bg-zinc-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">Sumbang Sekarang</h2>

          <p className="mt-4 text-muted-foreground">
            Pilih kaedah sumbangan yang paling mudah.
          </p>
        </div>

        <div className="grid items-stretch gap-8 md:grid-cols-2">
          <Card className="flex rounded-3xl p-10">
            <div className="flex w-full flex-col text-center">
              <div className="text-6xl">📱</div>

              <h3 className="mt-6 text-2xl font-bold">Imbas QR</h3>

              <p className="mt-4 text-muted-foreground">
                Imbas QR menggunakan aplikasi bank pilihan anda.
              </p>

              <div className="mt-8">
                <div className="mx-auto flex h-[260px] w-[260px] items-center justify-center rounded-3xl border bg-white p-4 shadow-sm">
                  <Image
                    src="/qr/qr-sumbangan.png"
                    alt="QR Code Sumbangan Masjid Al Umm"
                    width={240}
                    height={240}
                    className="rounded-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </Card>

          <Card className="flex rounded-3xl p-10">
            <div className="flex w-full flex-col text-center">
              <div className="text-6xl">🏦</div>

              <h3 className="mt-6 text-2xl font-bold">
                Buka Aplikasi Bank
              </h3>

              <p className="mt-4 text-muted-foreground">
                Tekan butang ini untuk salin nombor akaun dan teruskan bayaran
                melalui aplikasi bank.
              </p>

              <Button
                onClick={openBank}
                className="mt-10 h-14 w-full rounded-full"
              >
                Buka Aplikasi Bank
              </Button>

              <div className="mt-8 rounded-2xl bg-muted p-6">
                <div className="font-semibold">{campaign.bank.name}</div>

                <div>{campaign.bank.accountName}</div>

                <div className="mt-2 text-2xl font-bold">
                  {campaign.bank.accountNumber}
                </div>
              </div>

              <div className="mt-auto pt-6">
                <a
                  href={campaign.links.whatsappReceipt}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <Button
                className="h-14 w-full rounded-full bg-emerald-700 text-base font-semibold text-white hover:bg-emerald-800"
                >
                💬 Hantar Resit Melalui WhatsApp
                </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}