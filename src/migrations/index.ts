import * as migration_20250309_133715 from './20250309_133715';
import * as migration_20250309_134131 from './20250309_134131';

export const migrations = [
  {
    up: migration_20250309_133715.up,
    down: migration_20250309_133715.down,
    name: '20250309_133715',
  },
  {
    up: migration_20250309_134131.up,
    down: migration_20250309_134131.down,
    name: '20250309_134131'
  },
];
