export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const val = mathFunction();
    queue.push(val);
  } catch (error) {
    queue.push(error.message);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
