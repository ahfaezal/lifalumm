import { campaign } from "@/data/campaign";
import { formatCurrency } from "@/lib/formatCurrency";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function ProgressSection() {
  const percent = (campaign.collectedAmount / campaign.totalCost) * 100;

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold">Status Kutipan Semasa</h2>

          <p className="mt-4 text-muted-foreground">
            Setiap sumbangan membawa lif ini kepada penggunaan penuh.
          </p>
        </div>

        <Card className="rounded-3xl p-10">
          <div className="mb-6 flex justify-between gap-6">
            <div>
              <div className="text-sm text-muted-foreground">
                Dana Terkumpul
              </div>

              <div className="text-4xl font-bold text-emerald-700">
                {formatCurrency(campaign.collectedAmount)}
              </div>
            </div>

            <div className="text-right">
              <div className="text-sm text-muted-foreground">Sasaran</div>

              <div className="text-2xl font-semibold">
                {formatCurrency(campaign.totalCost)}
              </div>
            </div>
          </div>

          <Progress value={percent} className="h-5 [&>div]:bg-emerald-700" />

          <div className="mt-6 flex justify-between gap-6">
            <div>{percent.toFixed(1)}%</div>

            <div className="font-semibold text-red-600">
              Baki: {formatCurrency(campaign.remainingAmount)}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}