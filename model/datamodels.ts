type Site ={
    name: string;
    shouldCreate: boolean;
}

type SiteData = {
    siteName: string;
    title: string;
    content: string;
}

type Notes = {
    id: string;
    category: string;
    title: string;
    content: string;
    siteId: string;
}