import { Dialog, DialogTitle, Button } from "@material-ui/core";
import React from "react";

export const GameOverDialog = ({ handleRestart, isOpen }: any) => {
  return (
    <Dialog onClose={handleRestart} aria-labelledby="simple-dialog-title" open={isOpen}>
      <DialogTitle id="simple-dialog-title">Game Over...</DialogTitle>
      <Button onClick={handleRestart}>Play Again</Button>
    </Dialog>
  );
};
