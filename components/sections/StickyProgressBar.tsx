import { campaign } from "@/data/campaign";
import { formatCurrency } from "@/lib/formatCurrency";

export function StickyProgressBar() {
  const percent = (campaign.collectedAmount / campaign.totalCost) * 100;

  return (
    <div className="sticky top-0 z-40 border-b bg-white/90 px-4 py-3 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4">
        <div className="hidden text-sm font-semibold md:block">
          Kutipan Dana Lif
        </div>

        <div className="h-2 flex-1 overflow-hidden rounded-full bg-zinc-200">
          <div
            className="h-full rounded-full bg-emerald-700"
            style={{ width: `${percent}%` }}
          />
        </div>

        <div className="text-xs font-semibold md:text-sm">
          {percent.toFixed(1)}% terkumpul
        </div>

        <a
          href="#sumbang"
          className="rounded-full bg-emerald-700 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-800 md:text-sm"
        >
          Sumbang
        </a>
      </div>

      <div className="mx-auto mt-1 max-w-6xl text-center text-xs text-muted-foreground">
        Baki diperlukan: {formatCurrency(campaign.remainingAmount)}
      </div>
    </div>
  );
}