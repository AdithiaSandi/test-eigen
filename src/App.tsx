import { useState, useEffect } from "react";
import "./App.css";
import { Card, Col, Modal, Row, Skeleton } from "antd";
import Meta from "antd/es/card/Meta";

interface Res {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | undefined;
  publishedAt: string;
  content: string | null;
}

function App() {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState<Res[]>([]);
  const [active, setActive] = useState<number>(0);

  const token = process.env.API_KEY;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    setActive(parseInt(e.currentTarget.id));
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleFetch = () => {
    const options = { method: "GET" };
    fetch(
      `https://newsapi.org/v2/top-headlines?apiKey=${token}&category=technology&page=2`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setArticles(response.articles);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  const handleDate = () => {
    const date = new Date(articles[active]?.publishedAt);
    const str = date.toString();
    return str;
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      <div>
        <Row gutter={16}>
          {articles.map((item, index) => {
            return (
              <Col xs={24} sm={12} md={12} lg={8} xl={6} key={index}>
                <Card
                  hoverable
                  style={{ width: "auto", marginTop: 16 }}
                  cover={
                    item.urlToImage ? (
                      <img alt="example" src={item.urlToImage} />
                    ) : (
                      <Skeleton.Image active style={{ width: "100%" }} />
                    )
                  }
                  actions={[
                    <span id={index.toString()} onClick={(e) => showModal(e)}>
                      See More
                    </span>,
                    <a href={item.url} target="_blank">
                      Source
                    </a>,
                  ]}
                >
                  <Skeleton loading={loading} active>
                    <Meta
                      title={item.title}
                      description={item.description || loading}
                    />
                  </Skeleton>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>

      <Modal
        title={articles[active]?.source.name}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
        footer={null}
        centered
      >
        <img
          src={articles[active]?.urlToImage}
          alt=""
          style={{ maxWidth: "100%" }}
        />
        <h2>{articles[active]?.title}</h2>
        <p style={{ color: "GrayText" }}>{articles[active]?.description}</p>
        <p>
          <i>
            {articles[active]?.author} <br /> {handleDate()}
          </i>
        </p>
        <p>
          {articles[active]?.content}{" "}
          {
            <a href={articles[active]?.url} target="_blank">
              Source
            </a>
          }
        </p>
      </Modal>
    </>
  );
}

export default App;
