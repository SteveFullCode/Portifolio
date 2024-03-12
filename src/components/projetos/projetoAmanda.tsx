import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Amanda from "../../assets/amanda.png";
import Link from "next/link";

import Image from "next/image";
import { Button } from "../ui/button";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProjetoAmanda() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <section className="w-full">
      <Card className="flex flex-col max-w-xl mx-auto ">
        <CardHeader title="Projeto Estética" subheader=" 10 Março, 2024" />
        <CardMedia
          component={Link}
          href="https://amandaestetica.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 max-w-100"
        >
          <Image
            src={Amanda}
            alt="Eu"
            title="Linkedin"
            className="cursor-pointer "
          />
        </CardMedia>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Um projeto realizado para uma necessidade de divulgação de trabalho
            Autônomo, com mais profissionalidade e com futuras melhorias.
            Conforme os pedidos.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
          <Typography variant="body2" color="text.secondary">
            Tec
          </Typography>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Técnico.Dev</Typography>
            <Typography paragraph>
              O site foi feito com as tecnologias <span>Next.js</span>,
              <span>Tailwind</span>, <span>Typescript</span>,{" "}
              <span>Material.Ui</span>, <span>ui.shadcn</span>,{" "}
              <span>Mongodb</span>, <span>Node.js</span>,<span>Prisma</span>,{" "}
              <span>Fastify</span>.
            </Typography>
            <div className="flex gap-5">
              <IconButton aria-label="add to favorites">
                <div className="flex flex-col">
                  <Link
                    href="https://github.com/SteveFullCode/Amanda"
                    target="_blank"
                  >
                    <Button className="bg-slate-950 text-white hover:bg-slate-800">
                      Front-End
                    </Button>
                  </Link>
                </div>
              </IconButton>
              <IconButton aria-label="add to favorites">
                <div className="flex flex-col">
                  <Link
                    href="https://github.com/SteveFullCode/Amandaback"
                    target="_blank"
                  >
                    <Button className="bg-slate-950 text-white hover:bg-slate-800">
                      Back-End
                    </Button>
                  </Link>
                </div>
              </IconButton>
              <IconButton aria-label="add to favorites">
                <div className="flex flex-col">
                  <Link
                    href="https://amandaestetica.vercel.app"
                    target="_blank"
                  >
                    <Button className="bg-slate-950 text-white hover:bg-slate-800">
                      Site
                    </Button>
                  </Link>
                </div>
              </IconButton>
            </div>
          </CardContent>
        </Collapse>
      </Card>
    </section>
  );
}
