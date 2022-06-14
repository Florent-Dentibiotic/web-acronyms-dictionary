async function getAcronyms() {
  const response = await fetch('/acronyms');

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  return response.json();
}

export default getAcronyms;
