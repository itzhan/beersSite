import { Center, Heading, Stack } from "@chakra-ui/react";

const Timeline = () => {
  return (
    <Center maxW={"1000px"} w={"100%"} mx={"auto"} >
      <Stack spacing={"10"}>
          <Heading
            as={"h2"}
            textAlign={"center"}
            color={"#c2a980"}
            fontSize={"20px"}
            letterSpacing={'0.3em'}
            data-aos="fade-up"
          >
            制作流程
          </Heading>
          <Heading
            as={"h3"}
            fontSize={"35px"}
            textAlign={"center"}
            color={"#c2a980"}
            fontFamily={'Cormorant Garamond'}
            letterSpacing={'0.2em'}
            data-aos="fade-up"
          >
            每一瓶都用心酿造
          </Heading>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical" color="white">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#c2a980"
                className="h-5 w-5 "
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              className="timeline-start mb-10 md:text-end"
              data-aos="fade-right"
            >
              <time
                className="text-lg font-mono italic font-black mr-2"
                style={{ color: "#c2a980" }}
              >
                原料选择
              </time>
              <div
                className="timeline-box md:text-left scale-up-hor-right"
                style={{
                  border: "1px solid #aa986a",
                  padding: "10px",
                  borderRadius: "5px",
                  background: '#1e2329',
                  color: 'white'
                }}
              >
                我们选用的是优质的山药，这些山药生长在环境无污染、土壤肥沃的地区，确保每一根山药都饱满、无病虫害。山药的品种和生长环境是决定山药酒品质的关键，因此我们与多个山药种植基地建立了长期合作关系，确保原料的稳定供应和高质量。
              </div>
            </div>
            <hr className="timeline-bg-color" />
          </li>
          <li>
            <hr className="timeline-bg-color" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#c2a980"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10" data-aos="fade-left">
              <time
                className="text-lg font-mono italic font-black ml-2"
                style={{ color: "#c2a980" }}
              >
                清洗与去皮
              </time>
              <div
                className="timeline-box"
                style={{
                  color: "white",
                  border: "1px solid #c2a980",
                  padding: "10px",
                  borderRadius: "5px",
                  background: '#1e2329'
                }}
              >
                山药在进入生产车间前，会经过多道清洗程序，确保表面无泥土和杂质。随后，采用专业去皮设备，去除山药表皮，保证山药肉质的纯净。整个过程严格遵循食品安全标准，确保卫生无污染。
              </div>
            </div>
            <hr className="timeline-bg-color" data-aos="zoom-out-down" />
          </li>
          <li>
            <hr className="timeline-bg-color" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#c2a980"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              className="timeline-start md:text-end mb-10"
              data-aos="fade-right"
            >
              <time
                className="text-lg font-mono italic font-black mr-2"
                style={{ color: "#c2a980" }}
              >
                切片与干燥
              </time>
              <div
                className="timeline-box md:text-left"
                style={{
                  color: "white",
                  border: "1px solid #c2a980",
                  padding: "10px",
                  borderRadius: "5px",
                  background: '#1e2329'
                }}
              >
                去皮后的山药会被切成均匀的薄片，然后进入低温干燥室进行干燥处理。这一过程是为了去除山药中的水分，防止发霉变质，同时也有助于后续发酵过程中的酶活性保持。
              </div>
            </div>
            <hr className="timeline-bg-color" data-aos="zoom-out-down" />
          </li>
          <li>
            <hr className="timeline-bg-color" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#c2a980"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10" data-aos="fade-left">
              <time
                className="text-lg font-mono italic font-black ml-2"
                style={{ color: "#c2a980" }}
              >
                发酵准备
              </time>
              <div
                className="timeline-box md:text-left"
                style={{
                  color: "white",
                  border: "1px solid #c2a980",
                  padding: "10px",
                  borderRadius: "5px",
                  background: '#1e2329'
                }}
              >
                干燥后的山药片将被粉碎成细粉，并混合适量的水，制成山药浆。这些山药浆将在温控发酵罐中进行发酵。发酵过程中，我们使用的是精选的优质酵母，这些酵母菌种经过多年优化，能够最大程度地激发山药的香味和营养成分。
              </div>
            </div>
            <hr className="timeline-bg-color" data-aos="zoom-out-down" />
          </li>
          <li>
            <hr className="timeline-bg-color" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#c2a980"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              className="timeline-start md:text-end mb-10"
              data-aos="fade-right"
            >
              <time
                className="text-lg font-mono italic font-black mr-2"
                style={{ color: "#c2a980" }}
              >
                发酵过程
              </time>
              <div
                className="timeline-box md:text-left"
                style={{
                  color: "white",
                  border: "1px solid #c2a980",
                  padding: "10px",
                  borderRadius: "5px",
                  background: '#1e2329'
                }}
              >
                发酵是山药酒制作的核心环节。我们的发酵罐配备了先进的温度和湿度控制系统，确保发酵环境的稳定。整个发酵过程需要2至3个月的时间，在此期间，我们会定期检测发酵液的酸度、糖度和酒精含量，确保发酵过程的顺利进行。
              </div>
            </div>
            <hr className="timeline-bg-color" data-aos="zoom-out-down" />
          </li>
          <li>
            <hr className="timeline-bg-color" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#c2a980"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10" data-aos="fade-left">
              <time
                className="text-lg font-mono italic font-black ml-2"
                style={{ color: "#c2a980" }}
              >
                蒸馏与陈酿
              </time>
              <div
                className="timeline-box md:text-left"
                style={{
                  color: "white",
                  border: "1px solid #c2a980",
                  padding: "10px",
                  borderRadius: "5px",
                  background: '#1e2329'
                }}
              >
                发酵完成后，山药浆会经过蒸馏设备进行蒸馏，提取出山药酒的酒精成分。蒸馏出的原酒需要经过多次过滤和净化，去除杂质，保留山药酒的清香和纯正口感。然后，原酒会被储存在橡木桶中进行陈酿。陈酿时间通常为1至2年，在此过程中，酒液与橡木桶充分接触，吸收木香，同时酒体变得更加圆润、醇厚。
              </div>
            </div>
            <hr className="timeline-bg-color" data-aos="zoom-out-down" />
          </li>
          <li>
            <hr className="timeline-bg-color" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#c2a980"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              className="timeline-start md:text-end mb-10"
              data-aos="fade-right"
            >
              <time
                className="text-lg font-mono italic font-black mr-2"
                style={{ color: "#c2a980" }}
              >
                调配与包装
              </time>
              <div
                className="timeline-box md:text-left"
                style={{
                  color: "white",
                  border: "1px solid #c2a980",
                  padding: "10px",
                  borderRadius: "5px",
                  background: '#1e2329'
                }}
              >
                陈酿完成后，我们会根据山药酒的品质特点进行适当调配，以确保每一瓶山药酒都具有一致的风味和口感。调配完成后，山药酒会经过严格的质检，确保每一瓶酒都符合我们的高标准要求。最后，山药酒被灌装进精美的瓶子，并进行密封包装。
              </div>
            </div>
          </li>
        </ul>
      </Stack>
    </Center>
  );
};

export default Timeline;
