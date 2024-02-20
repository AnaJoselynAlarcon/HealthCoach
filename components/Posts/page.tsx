"use client";
import React, { useState, useEffect } from "react";

import HealthCoachPosts from "./hc-posts";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="border-spacing-1 mb-5">
        <h1 className="text-4xl font-bold text-center mt-10 text-cyan-600">
          Bachelors of Science in Nutrition
        </h1>
      </div>
      <div>
        <HealthCoachPosts />
      </div>
    </main>
  );
}
