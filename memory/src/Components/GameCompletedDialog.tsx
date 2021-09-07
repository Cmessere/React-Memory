import { Button, Dialog, DialogContent } from "@material-ui/core";

export const GameCompletedDialog = ({ handleRestart, isOpen, score }: any) => {

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
