export type ContributorsReponse = {
    avatar_url: string;
}

export type Contributor = {
    avatar_url: string
}


export type BoardProps = {
    contributors: Contributor[]
}

export type CardProps = {
    imageUrl: string,
    isTurned: boolean,
    isFound: boolean,
    turnCard: (index: number) => void,
    index: number
}

export type DialogProps = {
    handleRestart: () => void,
    isOpen: boolean,
    score: number
}
