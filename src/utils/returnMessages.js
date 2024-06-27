export function errorMessage(description = 'Hubo un problema') {
  return {
    estado: true,
    description
  }
}

export function successMessage(description) {
  return {
    estado: false,
    description
  }
}