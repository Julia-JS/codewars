// This series of katas will introduce you to basics of doing geometry with computers.
// Vector objects have x, y, and z attributes.
// Write a function calculating dot product of Vector a and Vector b.
// Tests round answers to 6 decimal places.

function dotProduct(v1, v2) {
  return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
}
