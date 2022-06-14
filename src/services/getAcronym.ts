async function getAcronym(id: string) {
  const response = await fetch(`/acronym/${id}`);

  if (!response.ok) {
    throw new Error('No such acronym');
  }

  return response.json();
}

export default getAcronym;
