export interface Exercise {
  id: string;
  title: string;
  difficulty: number;
  category: string;
  description: string;
  examples: Example[];
  constraints: string[];
  timeComplexity: string;
  spaceComplexity: string;
  hints: string[];
  relatedTopics: string[];
}

export interface Example {
  input: any;
  output: any;
  explanation?: string;
}

export interface TestCase {
  input: any;
  expected: any;
  description: string;
}
