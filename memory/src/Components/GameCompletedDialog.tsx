import { Button, Dialog, DialogContent } from "@material-ui/core";
import { DialogProps } from "../Services/Types";

export const GameCompletedDialog = ({ handleRestart, isOpen, score }: DialogProps) => {

  return (
    <Dialog maxWidth="lg" onClose={handleRestart} open={isOpen}>    
      <DialogContent>
          <div className="gameover-dialog">
            <p className="gameover-dialog-title">YOU WON!</p>
            <p className="gameover-dialog-score">Score:{score}</p>
            <Button className="gameover-button" onClick={handleRestart}>Play Again!</Button>
          </div>
        </DialogContent>
    </Dialog>
  );
};
