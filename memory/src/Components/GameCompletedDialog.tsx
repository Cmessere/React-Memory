import { Button, Dialog, DialogTitle } from "@material-ui/core";

export const GameCompletedDialog = ({ handleRestart, isOpen }: any) => {

  return (
    <Dialog onClose={handleRestart} aria-labelledby="simple-dialog-title" open={isOpen}>
      <DialogTitle id="simple-dialog-title">You Won!</DialogTitle>
      <Button onClick={handleRestart}>Play Again</Button>
    </Dialog>
  );
};
