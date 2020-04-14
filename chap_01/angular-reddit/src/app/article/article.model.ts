export class Article {
    title: string;
    link: string;
    votes: number;

    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    voteUp(): void {
        this.votes++;
    }

    voteDown(): void {
        this.votes--;
    }

    domain(): string {
        try {
            // 예: http://test.com/...
            // test.com/... 추출
            const domainAndPath: string = this.link.split('//')[1];

            // test.com 추출
            return domainAndPath.split('/')[0];

        } catch(e) {
            return null;
        }
    }
}