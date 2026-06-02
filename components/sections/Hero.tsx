import Image from "next/image";
import { campaign } from "@/data/campaign";

export function Hero() {
  return (
    <section className="relative overflow-hidden">

      <div className="absolute inset-0">

        <Image
          src="/images/hero-masjid.png"
          alt="Masjid Al Umm"
          fill
          priority
          className="object-cover object-right"
        />

        <div className="absolute inset-0 bg-black/58" />

      </div>

      <div className="relative z-10 mx-auto flex min-h-[95vh] max-w-6xl items-center px-6">

        <div className="mx-auto max-w-4xl text-center text-white backdrop-blur-[2px] rounded-3xl px-8 py-10">

          <div className="inline-flex rounded-full bg-white/10 px-6 py-2 backdrop-blur">
            Kempen Infaq Masjid Al Umm
          </div>

          <h1 className="mt-8 text-4xl font-bold leading-tight md:text-7xl">

            Bantu Lengkapkan
            <br />
            Bayaran Lif Baharu
            <br />
            Masjid Al Umm

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl text-white/90 leading-9">

            Memudahkan akses warga emas,
            OKU,
            ibu mengandung
            dan seluruh jemaah
            ke aras atas masjid.

          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <a href="#sumbang">

              <button className="rounded-full bg-emerald-600 px-10 py-5 text-lg font-semibold hover:bg-emerald-700">

                💚 Sumbang Sekarang

              </button>

            </a>

            <a href="#sumbang">

              <button className="rounded-full border border-white px-10 py-5 text-lg hover:bg-white hover:text-black">

                📱 Imbas QR

              </button>

            </a>

          </div>

          <div className="mx-auto mt-14 max-w-md rounded-3xl bg-black/35 p-8 backdrop-blur">

            <div className="text-sm uppercase tracking-wide text-white/80">
              Baki Masih Diperlukan
            </div>

            <div className="mt-3 text-4xl font-bold md:text-6xl">
              RM{campaign.remainingAmount.toLocaleString()}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}