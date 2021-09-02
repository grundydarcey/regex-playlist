const inputs = document.querySelectorAll('input');

const patterns = {
  telephone: /^\d{11}$/,
  username: /^[a-z\d]{5,12}$/i,
  password: /^[\d\w@-]{8,20}$/i,
  slug: /^[a-z\d-]{8,20}$/
};

function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = 'valid';
  } else {
    field.className = 'invalid';
  }
}

inputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});