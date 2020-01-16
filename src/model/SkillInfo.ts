const devLevelInfoStrategy = (level: any) => {
  const { unitTesting, integrationTesting, development } = level;
  return { unitTesting, integrationTesting, development };
};
const languageLevelInfoStrategy = (level: any) => {
  const { writing, reading, listening, speaking } = level;
  return { writing, reading, listening, speaking };
};

const levelStrategies = {
  DEV: devLevelInfoStrategy,
  LANGUAGE: languageLevelInfoStrategy
};

export const SkillInfo = (json: any) => {
  const { type, language, level: levelRaw } = json;

  let strategy = (level: any) => ({});

  if (type === 'DEV') {
    strategy = levelStrategies.DEV;
  } else if (type === 'LANGUAGE') {
    strategy = levelStrategies.LANGUAGE;
  }

  return { type, language, level: strategy(levelRaw) };
};

export interface IDevSkillInfo {
  type: 'DEV';
  language: string;
  level: {
    unitTesting: number;
    integrationTesting: number;
    development: number;
  };
}

export interface ILanguageSkillInfo {
  type: 'LANGUAGE';
  language: string;
  level: {
    writing: number;
    reading: number;
    listening: number;
    speaking: number;
  };
}
