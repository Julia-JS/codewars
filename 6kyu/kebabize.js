// Modify the kebabize function so that it converts a camel case string into a kebab case.
//
// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps
//
// Notes:
// the returned string should only contain lowercase letters

function kebabize(str) {
  return str.replace(/[A-Z]/g, c => '-' + c.toLowerCase()).replace(/\d/g, '').replace(/^-/, '');
}

function kebabize(str) {
  return str.split(/(?=[A-Z])/).join('-').replace(/\d/g, '').toLowerCase();
}
