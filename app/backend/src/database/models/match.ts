import { Model, INTEGER } from 'sequelize';
import db from '.';
import Teams from './team';

class Matches extends Model {
  id: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: number;
}

Matches.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeam: {
    type: INTEGER,
    allowNull: false,
  },
  homeTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeam: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  inProgress: {
    type: INTEGER,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'matches',
  timestamps: false });

Matches.belongsTo(Teams, { foreignKey: 'homeTeam', as: 'homeTeam' });
Matches.belongsTo(Teams, { foreignKey: 'awayTeam', as: 'awayTeam' });

Teams.hasMany(Matches, { foreignKey: 'homeTeam', as: 'homeTeam' });
Teams.hasMany(Matches, { foreignKey: 'awayTeam', as: 'awayTeam' });

export default Matches;
