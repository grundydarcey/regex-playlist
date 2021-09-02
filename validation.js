const inputs = document.querySelectorAll('input');

const patterns = {
  telephone: /^\d[11]$/
};

function validate(field, regex) {
  //console.log(regex.test(field.value));
  if (regex.test(field.value)) {
    field.className = 'valid';
  } else {
    field.className = 'invalid';
  }
}

inputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    //console.log(e.target.attributes.name.value);
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});