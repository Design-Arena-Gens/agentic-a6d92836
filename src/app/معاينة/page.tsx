"use client";
import { useEffect, useMemo, useState } from "react";
import { loadStore } from "@/lib/store";
import Link from "next/link";

export default function PreviewPage() {
  const [mounted, setMounted] = useState(false);
  const store = useMemo(() => loadStore(), []);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  if (!store) {
    return (
      <div className="container-ar py-16">
        <div className="card p-8 text-center">
          <h1 className="text-2xl font-bold">?? ???? ?????? ??????</h1>
          <p className="mt-2 text-gray-600">????? ??? ???? ?????? ?????? ???? ????.</p>
          <Link className="btn-primary mt-6 inline-block" href="/????-??????">???? ??????</Link>
        </div>
      </div>
    );
  }

  const theme = {
    color: store.primaryColor,
    bg: store.template === "????" ? "#0b1220" : "#ffffff",
    fg: store.template === "????" ? "#e5e7eb" : "#111827",
    muted: store.template === "????" ? "#9ca3af" : "#6b7280",
    card: store.template === "????" ? "#111827" : "#ffffff",
    border: store.template === "????" ? "#1f2937" : "#e5e7eb",
  };

  return (
    <div style={{ backgroundColor: theme.bg, color: theme.fg }}>
      <div className="border-b" style={{ borderColor: theme.border, backgroundColor: theme.card }}>
        <div className="container-ar h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg" style={{ backgroundColor: theme.color }} />
            <div className="font-extrabold">{store.name}</div>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <a className="hover:opacity-80" href="#">????????</a>
            <a className="hover:opacity-80" href="#">??????</a>
            <a className="hover:opacity-80" href="#">?????</a>
          </div>
        </div>
      </div>

      <section className="container-ar py-10">
        <div className="rounded-2xl border p-8" style={{ backgroundColor: theme.card, borderColor: theme.border }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: `${theme.color}22`, color: theme.color }}>
            ???? {store.industry}
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold">?????? ??? ?? {store.name}</h1>
          <p className="mt-2" style={{ color: theme.muted }}>??????? ???????? ???????? ?????? ?? ???? ????????.</p>
          <div className="mt-6 flex gap-2">
            <button className="btn-primary" style={{ backgroundColor: theme.color }}>???? ????</button>
            <button className="btn-outline">??????</button>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["?????", "????", "????", "????", "??????", "???"].map((p) => (
              <div key={p} className="rounded-xl border overflow-hidden" style={{ backgroundColor: theme.card, borderColor: theme.border }}>
                <div className="h-36 bg-gray-100" />
                <div className="p-4">
                  <div className="font-semibold">{p}</div>
                  <div className="text-sm" style={{ color: theme.muted }}>4,900 DZD</div>
                  <button className="btn-primary mt-3 w-full" style={{ backgroundColor: theme.color }}>??? ??? ?????</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between">
          <Link className="btn-outline" href="/????-??????">????? ?????????</Link>
          <a className="btn-outline" href="#???????">??????? ??? ??? ??????</a>
        </div>
      </section>
    </div>
  );
}
