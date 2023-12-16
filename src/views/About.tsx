// assets
import b2 from "../assets/w1.jpg";
import aboutIllustration from "../assets/q1.jpg";

// components
import { Reveal } from "../components";
// framer-motion
import { motion } from "framer-motion";

// utils
import { scale } from "../utils/variants";
import { transition } from "../utils/transition";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center relative"  
      style={{
        background: `url(${b2}) center no-repeat` ,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between
          items-center xl:items-start gap-12 w-full py-16"
      >
        <div className="flex flex-col gap-4">
          <Reveal>
            <h2
              className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
      font-bold text-textPrimary"
            >
              <span className="text-secondary"> Aster auto</span> QA Engineer, Flutter developer
            </h2>
          </Reveal>

          <Reveal>
            <p className="text-center xl:text-start text-lg sm:text-2xl text-textSecondary">
              Проводил полное тестирование функционала приложения, выявлял и исправлял обнаруженные ошибки, а также вносил улучшения с помощью собственных идей
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-4">
          {/* Content of the second block goes here */}
          <Reveal>
            <h2
              className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
      font-bold text-textPrimary"
            >
              <span className="text-secondary"> Yandex School</span> Flutter Student

            </h2>
          </Reveal>

          <Reveal>
            <p className="text-center xl:text-start text-base sm:text-2xl text-textSecondary">

              Прошел отбор интенсивные курсы с ведущими специалистами Яндекса. В рамках командной работы мы совместно с бэкенд-разработчиками и дизайнерами разрабатывали приложение.

            </p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-4">
          <Reveal>
            <h2
              className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
      font-bold text-textPrimary"
            >
              <span className="text-secondary"> Self-learning && creativity
              </span> Самоучка
            </h2>
          </Reveal>

          <Reveal>
            <p className="text-center xl:text-start text-base sm:text-2xl text-textSecondary">
              Участвую в соревнованиях и хакатонах
            </p>
          </Reveal>
          {/* Content of the third block goes here */}
        </div>




        <div className="flex-1 flex items-center justify-center">
          <motion.img
            variants={scale()}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            src={aboutIllustration}
            alt=""
            className="max-w-full sm:max-w-[401px]"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
};

export default About;

