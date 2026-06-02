import { CheckCircle2, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

export function ProjectSection() {
  const steps = [
    "Kontraktor telah dilantik",
    "Lif baharu telah siap dipasang",
    "Testing & commissioning siap pada 11 Mei 2026",
    "Menunggu penyelesaian baki bayaran",
    "Lif boleh digunakan oleh jemaah",
  ];

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">Status Projek</h2>
          <p className="mt-4 text-muted-foreground">
            Lif telah siap dipasang dan hanya menunggu baki bayaran diselesaikan.
          </p>
        </div>

        <Card className="rounded-3xl p-10">
          <div className="space-y-6">
            {steps.map((step, index) => {
              const isPending = index === 3 || index === 4;

              return (
                <div key={step} className="flex gap-4">
                  <div className="mt-1">
                    {isPending ? (
                      <Clock className="h-6 w-6 text-amber-600" />
                    ) : (
                      <CheckCircle2 className="h-6 w-6 text-emerald-700" />
                    )}
                  </div>

                  <div>
                    <p className="font-semibold">{step}</p>
                    <p className="text-sm text-muted-foreground">
                      {isPending
                        ? "Dalam proses"
                        : "Selesai"}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </section>
  );
}