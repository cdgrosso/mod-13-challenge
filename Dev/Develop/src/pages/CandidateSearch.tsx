import Candidate from '../interfaces/Candidate.interface';
import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate>({} as Candidate);

  const firstCandidate = async () => {
    const gitList = await searchGithub()
    const { login, avatar_url, location, email, company, bio } = await searchGithubUser(gitList[0].login);
    const newCandidate: Candidate = {
      avatarURL: avatar_url,
      login: login,
      location: location,
      email: email,
      company: company,
      bio: bio
    };
    setCandidate(newCandidate);
  };

  useEffect(() => {
    firstCandidate();
  }, []);

  const handleMouseClickAccept = async () => {
    console.log('Accepted');
    const gitList = await searchGithub() as Candidate[];
    const { login, avatar_url, location, email, company, bio } = await searchGithubUser(gitList[0].login);
    const newCandidate: Candidate = {
      avatarURL: avatar_url,
      login: login,
      location: location,
      email: email,
      company: company,
      bio: bio
    };
    setCandidate(newCandidate);
    console.log(candidate);
  };

  const handleMouseClickDeny = async () => {
    console.log('Denied');
    const gitList = await searchGithub() as Candidate[];
    console.log(gitList);
    const { login, avatar_url, location, email, company, bio } = await searchGithubUser(gitList[0].login);
    const newCandidate: Candidate = {
      avatarURL: avatar_url,
      login: login,
      location: location,
      email: email,
      company: company,
      bio: bio
    };
    setCandidate(newCandidate);
    console.log(candidate);
  };

  return (
    <div>
      <h1>CandidateSearch</h1>
      <button onClick={handleMouseClickAccept}>Accept</button>
      <button onClick={handleMouseClickDeny}>Deny</button>
      {/* Render candidate details here */}
    </div>
  );
};

export default CandidateSearch;