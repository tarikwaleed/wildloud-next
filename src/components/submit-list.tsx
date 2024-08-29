
"use client";
import React, { useState, useEffect } from "react";
import SubmitCard from "@/components/submit-card";
import { api } from "@/../convex/_generated/api";
import { usePaginatedQuery } from "convex/react";
import { Button } from "@/components/ui/button";

type Props = {};

const SubmitList = (props: Props) => {
  const { results, status, loadMore } = usePaginatedQuery(
    api.submit.list,
    {},
    { initialNumItems: 1 }
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = async () => {
    if (currentIndex < results.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else if (status === "CanLoadMore" && !loading) {
      setLoading(true);
      await loadMore(1);
      setLoading(false);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    if (currentIndex >= results.length && status === "CanLoadMore" && !loading) {
      setLoading(true);
      loadMore(1).then(() => {
        setLoading(false);
      });
    }
  }, [currentIndex, results, status, loadMore, loading]);

  const currentSubmit = results[currentIndex];

  return (
    <>
      {currentSubmit && (
        <SubmitCard
          key={currentSubmit._id}
          url={currentSubmit.url}
          impression={currentSubmit.impression}
          platform={currentSubmit.platform}
          points={currentSubmit.points}
        />
      )}
      <Button
        onClick={handleLoadMore}
        disabled={(status !== "CanLoadMore" && currentIndex >= results.length - 1) || loading}
      >
        Skip
      </Button>
    </>
  );
};

export default SubmitList;
