"use client";
import { useEffect, useMemo, useState } from "react";
import { loadStore, saveStore, type StoreData } from "@/lib/store";
import Link from "next/link";
import { Palette, Store, ArrowRight, Sparkles } from "lucide-react";

const industries = ["?????", "??????????", "???????", "?????", "???? ??????", "????"];
const templates = [
  { id: "????", name: "????", preview: "/templates/modern.svg" },
  { id: "???????", name: "???????", preview: "/templates/classic.svg" },
  { id: "????", name: "????", preview: "/templates/elegant.svg" },
] as const;

export default function DashboardPage() {
  const existing = useMemo(() => loadStore(), []);
  const [step, setStep] = useState(1);
  const [data, setData] = useState<StoreData>(
    existing ?? {
      name: "?????",
      slug: "my-shop",
      primaryColor: "#2563eb",
      industry: industries[0],
      template: "????",
      createdAt: new Date().toISOString(),
    }
  );

  useEffect(() => {
    saveStore(data);
    const metaTheme = document.querySelector("meta[name='theme-color']");
    if (metaTheme) metaTheme.setAttribute("content", data.primaryColor);
  }, [data]);

  return (
    <div className="container-ar py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-extrabold">???? ??????</h1>
        <div className="flex items-center gap-2">
          <Link href="/" className="btn-outline">?????? ????????</Link>
          <Link href="/??????" className="btn-primary">?????? ??????</Link>
        </div>
      </div>

      <ol className="grid sm:grid-cols-3 gap-3 mb-8">
        {["??????? ??????", "??????? ???????", "???"].map((t, i) => (
          <li key={t} className={`card p-3 text-sm font-medium ${step === i + 1 ? "ring-2 ring-primary-500" : ""}`}>{i + 1}. {t}</li>
        ))}
      </ol>

      {step === 1 && (
        <section className="card p-6 grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2">??? ??????</label>
            <input value={data.name} onChange={(e)=>setData({ ...data, name: e.target.value })} className="w-full rounded-lg border px-3 py-2" placeholder="?????: ????? DZ" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">?????? (slug)</label>
            <input value={data.slug} onChange={(e)=>setData({ ...data, slug: e.target.value.replace(/\s+/g,'-') })} className="w-full rounded-lg border px-3 py-2" placeholder="anaqa-dz" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">??????</label>
            <select value={data.industry} onChange={(e)=>setData({ ...data, industry: e.target.value })} className="w-full rounded-lg border px-3 py-2">
              {industries.map((i)=> (<option key={i} value={i}>{i}</option>))}
            </select>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <Store className="h-5 w-5" />
            <p>????? ?????: <span className="font-mono">{data.slug}.majjari.app</span></p>
          </div>
          <div className="md:col-span-2 flex justify-between">
            <span />
            <button onClick={()=>setStep(2)} className="btn-primary">??????</button>
          </div>
        </section>
      )}

      {step === 2 && (
        <section className="card p-6 grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2">????? ???????</label>
            <div className="flex items-center gap-3">
              <input type="color" value={data.primaryColor} onChange={(e)=>setData({ ...data, primaryColor: e.target.value })} className="h-10 w-16 rounded" />
              <span className="inline-flex items-center gap-2 text-sm text-gray-700"><Palette className="h-4 w-4"/> ???? ??? ?????</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">??????</label>
            <div className="grid grid-cols-3 gap-3">
              {templates.map(t => (
                <button key={t.id} onClick={()=>setData({ ...data, template: t.id })} className={`rounded-lg border p-2 hover:border-primary-500 ${data.template===t.id?"ring-2 ring-primary-500":""}`}>
                  <img src={t.preview} alt={t.name} className="rounded mb-2"/>
                  <div className="text-sm font-medium">{t.name}</div>
                </button>
              ))}
            </div>
          </div>
          <div className="md:col-span-2 flex justify-between">
            <button onClick={()=>setStep(1)} className="btn-outline">??????</button>
            <button onClick={()=>setStep(3)} className="btn-primary">??????</button>
          </div>
        </section>
      )}

      {step === 3 && (
        <section className="card p-6">
          <h2 className="text-xl font-bold">?? ??? ???? ?????</h2>
          <p className="mt-2 text-gray-600">?? ??? ??????? ????? ??? ?????. ????? ???????? ????? ???????? ?????? ???????? ????? ????? ??????? ??????.</p>

          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            <div className="rounded-lg border p-4">
              <div className="text-sm text-gray-500">?????</div>
              <div className="font-semibold">{data.name}</div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="text-sm text-gray-500">??????</div>
              <div className="font-mono">{data.slug}</div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="text-sm text-gray-500">??????</div>
              <div className="font-semibold">{data.template}</div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <Link href="/??????" className="btn-primary inline-flex gap-1"><Sparkles className="h-4 w-4"/> ??????</Link>
            <a href="#???????" className="btn-outline inline-flex gap-1"><ArrowRight className="h-4 w-4"/> ????????</a>
          </div>
        </section>
      )}
    </div>
  );
}
