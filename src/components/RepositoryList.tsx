import { useState, useEffect } from 'react';

import { RepositoryItem } from './RepositoryItem';

import '../styles/repositories.scss';

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);

    const renderRepos = () => repositories.map(repository => <RepositoryItem key={repository.name} repository={repository} />);

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {renderRepos()}
            </ul>
        </section>
    );
}