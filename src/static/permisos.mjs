const permisos = {
  0: {
    desc: 'sin permiso',
    value: '---'
  },
  1: {
    desc: 'ejecución',
    value: '--x'
  },
  2: {
    desc: 'escritura',
    value: '-w-'
  },
  3: {
    desc: 'escritura y ejecución',
    value: '-wx'
  },
  4: {
    desc: 'lectura',
    value: 'r--'
  },
  5: {
    desc: 'lectura y ejecución',
    value: 'r-x'
  },
  6: {
    desc: 'lectura y escritura',
    value: 'rw-'
  },
  7: {
    desc: 'lectura, escritura y ejecución',
    value: 'rwx'
  },
}

const tiposPermisos = {
  '-': 'Sin permiso',
  'r': 'lectura',
  'w': 'escritura',
  'x': 'ejecución'
}

const permisosClaves = ['r', 'w', 'x', '-']

export { permisos, permisosClaves, tiposPermisos }