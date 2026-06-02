import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function NazirSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Card className="overflow-hidden rounded-3xl p-6 md:p-10">
          <div className="grid gap-10 md:grid-cols-[1fr_0.9fr] md:items-center">
            <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-2xl bg-zinc-100">
              <Image
                src="/images/nazir-rayuan.png"
                alt="Ucapan Nazir Masjid Al Umm"
                width={1200}
                height={900}
                className="h-auto w-full rounded-2xl object-contain"
                priority
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-emerald-700">
                Ucapan Rayuan Nazir
              </p>

              <h2 className="mt-3 text-4xl font-bold leading-tight">
                Bersama Lengkapkan Baki Bayaran Lif Baharu
              </h2>

              <p className="mt-6 leading-8 text-muted-foreground">
                Alhamdulillah, projek pemasangan lif baharu Masjid Al Umm telah berjaya
                disiapkan. Namun, masih terdapat baki bayaran yang perlu diselesaikan
                sebelum kemudahan ini dapat dimanfaatkan sepenuhnya oleh para jemaah.
              </p>

              <p className="mt-4 leading-8 text-muted-foreground">
                Saya menyeru para jemaah dan orang ramai untuk sama-sama menyumbang
                mengikut kemampuan. Semoga sumbangan ini menjadi amal jariah yang
                berpanjangan.
              </p>

              <div className="mt-8">
                <p className="font-bold">Ustaz Khairil Khuzairi Omar</p>
                <p className="text-muted-foreground">Nazir Masjid Al Umm</p>
              </div>

              <a href="#sumbang" className="mt-8 inline-block">
                <Button className="h-14 rounded-full bg-emerald-700 px-8 hover:bg-emerald-800">
                  💚 Sumbang Sekarang
                </Button>
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}