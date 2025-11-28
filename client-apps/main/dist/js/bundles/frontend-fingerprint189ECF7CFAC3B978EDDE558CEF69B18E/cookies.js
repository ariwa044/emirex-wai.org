function createCookie(name, value, maxAge = null) {
  if (!name || !value) {
    console.error("Name and value are required to create a cookie.");
    return;
  }

  const encodedName = encodeURIComponent(name);
  const encodedValue = encodeURIComponent(value);
  const maxAgeString = maxAge ? `; max-age=${maxAge}` : "";
  const cookieString = `${encodedName}=${encodedValue}${maxAgeString}; path=/`;

  document.cookie = cookieString;
}

function readCookie(name) {
  if (!name) {
    console.error("Name is required to read a cookie.");
    return null;
  }

  const nameEQ = `${encodeURIComponent(name)}=`;
  const cookiesArray = document.cookie.split(";");

  for (const cookie of cookiesArray) {
    let c = cookie.trim();
    if (c.startsWith(nameEQ)) {
      return decodeURIComponent(c.substring(nameEQ.length));
    }
  }

  return null;
}
