// src/app/api/hello/route.ts
import { NextResponse } from 'next/server';

import f2025 from '../../data/f2025.json';
import s2025 from '../../data/s2025.json';


const dataMap = {
  f2025,
  s2025
};

type SemesterKey = keyof typeof dataMap;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const semester = searchParams.get('semester');

  if (!semester || !isValidSemesterKey(semester)) {
    return NextResponse.json({ error: 'Invalid semester' }, { status: 400 });
  }

  const data = dataMap[semester];

  const filteredData = data.searchResults.map(({course_num, course_title}) => {
    return { course_title, course_num };
  });

  return NextResponse.json(filteredData);
}

function isValidSemesterKey(key: string): key is SemesterKey {
  return key in dataMap;
}