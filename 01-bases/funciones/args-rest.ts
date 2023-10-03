(() => {
  const fullName = (firstName: string, ...rest: string[]): string => {
    return `${firstName} ${rest.join(' ')}`;
  };

  const superman = fullName('Clark', 'Kent', 'Superman');
  console.log({ superman });
})();
