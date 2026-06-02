import { Card } from "@/components/ui/card";

const reasons = [
  {
    icon: "👴",
    title: "Warga Emas",
    desc:
      "Membantu warga emas hadir ke kuliah, solat berjemaah dan aktiviti masjid dengan lebih selesa.",
  },

  {
    icon: "♿",
    title: "Mesra OKU",
    desc:
      "Memudahkan akses jemaah berkeperluan khas untuk bergerak ke aras berbeza dengan selamat.",
  },

  {
    icon: "🤰",
    title: "Ibu Mengandung",
    desc:
      "Mengurangkan risiko dan memberi keselesaan kepada ibu mengandung semasa hadir ke masjid.",
  },

  {
    icon: "🕌",
    title: "Seluruh Jemaah",
    desc:
      "Kemudahan yang boleh dimanfaatkan setiap hari oleh ribuan pengguna untuk tempoh yang panjang.",
  },
];

export function WhyDonateSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <div className="mb-14 text-center">

          <p className="text-sm font-semibold text-emerald-700">
            Kenapa Lif Ini Penting
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Setiap Sumbangan Memberi Kemudahan Kepada Ramai
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-muted-foreground">
            Lif ini bukan sekadar kemudahan fizikal, tetapi usaha memudahkan
            ibadah dan urusan jemaah setiap hari.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {reasons.map((item) => (
            <Card
              key={item.title}
              className="rounded-3xl p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="text-5xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-muted-foreground">
                {item.desc}
              </p>

            </Card>
          ))}

        </div>

      </div>
    </section>
  );
}