export default function getListStudents() {
  const first = { id: 1, firstName: 'Guillaume', location: 'San Francisco' };
  const second = { id: 2, firstName: 'James', location: 'Columbia' };
  const third = { id: 5, firstName: 'Serena', location: 'San Francisco' };
  return Array(first, second, third);
}
