import Image from "next/image";
import { Card } from "@/components/ui/card";

export function LiftCompareSection() {
  return (
    <section className="bg-zinc-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold text-emerald-700">
            Transformasi Kemudahan Masjid
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Daripada Lif Lama Kepada Lif Baharu
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Lif baharu ini dibangunkan untuk memberi akses yang lebih selesa,
            selamat dan mesra kepada semua jemaah.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="overflow-hidden rounded-3xl">
            <div className="relative h-[360px]">
              <Image
                src="/images/lif-lama.png"
                alt="Lif lama Masjid Al Umm"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8">
              <p className="text-sm font-semibold text-red-600">Sebelum</p>
              <h3 className="mt-2 text-2xl font-bold">Lif Lama</h3>
              <p className="mt-3 text-muted-foreground">
                Mengalami kerosakan berulang dan tidak lagi sesuai untuk
                keperluan penggunaan jemaah semasa.
              </p>
            </div>
          </Card>

          <Card className="overflow-hidden rounded-3xl">
            <div className="relative h-[360px]">
              <Image
                src="/images/lif-baharu.png"
                alt="Lif baharu Masjid Al Umm"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8">
              <p className="text-sm font-semibold text-emerald-700">Selepas</p>
              <h3 className="mt-2 text-2xl font-bold">Lif Baharu</h3>
              <p className="mt-3 text-muted-foreground">
                Lebih moden, heavy-duty, selamat dan sesuai untuk kegunaan
                warga emas, OKU serta seluruh jemaah.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}