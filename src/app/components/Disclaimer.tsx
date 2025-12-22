export default function Disclaimer() {
  return (
    <section id="disclaimer" className="py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-primary font-semibold text-pruf dark:text-white">
          Disclaimer
        </h2>

        <p
          className="mt-4 text-base font-body text-gray-600 dark:text-gray-400 
        leading-relaxed"
        >
          This portfolio represents verifiable experiences, community
          involvement, and ecosystem participation. It does not constitute
          financial advice, investment guidance, or a guarantee of future
          outcomes.
        </p>

        <p
          className="mt-3 text-base font-body text-gray-600 dark:text-gray-400
         leading-relaxed"
        >
          All blockchain platforms, tools, and protocols referenced are used for
          educational, community, or technical purposes. Visitors are encouraged
          to conduct their own research before engaging with any Web3 project.
        </p>
      </div>
    </section>
  );
}
