import { Dialog,Button, DialogContent } from "@material-ui/core";
import "../Styles/Dialogs.css";


export const GameOverDialog = ({ handleRestart, isOpen, score }: any) => {
  return (
      <Dialog maxWidth="lg" onClose={handleRestart} open={isOpen} >
        <DialogContent>
          <div className="gameover-dialog">
            <p className="gameover-dialog-title">GAME OVER</p>
            <p className="gameover-dialog-score">Score:{score}</p>
            <Button className="gameover-button" onClick={handleRestart}>New Game!</Button>
          </div>
        </DialogContent>
      </Dialog>
  );
};
