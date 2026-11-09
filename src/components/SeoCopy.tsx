import { TARIFFS } from "../data";

export default function SeoCopy() {
  return (
    <section id="prices" aria-labelledby="kazan-cleaning-title" className="scroll-mt-20 bg-mist py-16 md:py-20">
      <div className="container-x grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <div className="kicker">Клининг в Казани</div>
          <h2 id="kazan-cleaning-title" className="mt-3 text-3xl font-semibold leading-snug text-graphite md:text-4xl">
            Уборка квартир и домов с понятной ценой
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-ink/65">
            «Вершина» выполняет влажную и генеральную уборку, клининг после ремонта
            и комплексную уборку «Всё включено» в Казани. Мы привозим оборудование и
            профессиональные средства, работаем по чек-листу и заранее фиксируем стоимость.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-ink/65">
            На сайте указаны начальные ставки за квадратный метр. Итоговая стоимость зависит
            от площади, состояния помещения и состава работ. Уточним детали по
            телефону или в мессенджере и согласуем цену до приезда команды.
          </p>
        </div>

        <dl className="grid gap-px overflow-hidden rounded-3xl bg-black/10 sm:grid-cols-2">
          {TARIFFS.map((item) => (
            <div key={item.id} className="bg-white p-6">
              <dt className="text-sm font-semibold text-graphite">{item.name}</dt>
              <dd className="mt-3 text-2xl font-bold text-emerald">
                {item.rate === null ? "По запросу" : `от ${item.rate.toLocaleString("ru-RU")} ₽/м²`}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
