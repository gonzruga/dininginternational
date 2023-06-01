import React, { useState, UseEffect, useEffect } from "react";
import "../styles/book.css";
import BookCard from "../shared/BookCard";
import BookData from "../assets/data/books";
import BookData2 from "../../assets/data/books2";

import SearchBar from "../shared/SearchBar";
import CommonSection from "../shared/CommonSection";
import { Col, Container, Row } from "reactstrap";
const Books = () => {
  const [pageCount, SetPageCount] = useState(0);
  const [page, setPage] = useState(0);
  useEffect(() => {
    const pages = Math.ceil(5 / 4);
    SetPageCount(pages);
  }, [page]);
  return (
    <>
      <CommonSection title={"All Events"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {BookData2?.map((book) => (
              <Col lg="3" className="mb-4" key={book.id}>
                <BookCard book={book} />
              </Col>
            ))}
            <Col lg="12">
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map((number) => (
                  <span
                    key={number}
                    onClick={() => setPage(number)}
                    className={page === number ? "active_page" : ""}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Books;
