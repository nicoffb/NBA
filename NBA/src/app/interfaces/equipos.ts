export interface Equipos {
  _internal: Internal
  league: League
}

export interface Internal {
  pubDateTime: string
  igorPath: string
  xslt: string
  xsltForceRecompile: string
  xsltInCache: string
  xsltCompileTimeMillis: string
  xsltTransformTimeMillis: string
  consolidatedDomKey: string
  endToEndTimeMillis: string
}

export interface League {
  standard: Team[]
  africa: Team[]
  sacramento: Team[]
  vegas: Team[]
  utah: Team[]
}

export interface Team {
  isNBAFranchise: boolean
  isAllStar: boolean
  city: string
  altCityName: string
  fullName: string
  tricode: string
  teamId: string
  nickname: string
  urlName: string
  teamShortName: string
  confName: string
  divName: string
}

