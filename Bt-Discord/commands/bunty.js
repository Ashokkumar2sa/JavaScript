
const replies = ['yours very small.. Need help', 'Cool you could provide help to other', 'Wait do you have a bunty', 'Fu***ng god save from you'];

module.exports = function(msg, args) {
  const index = Math.floor(Math.random() * replies.length);
  msg.channel.send(replies[index]);
};